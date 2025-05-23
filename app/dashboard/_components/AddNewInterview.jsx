"use client";
import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { IoMail } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import { chatSession } from "../../../utils/GeminiAI";
import { db } from "../../../utils/db";
import { LoaderCircle } from "lucide-react";
import { MockInterview } from "../../../utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "../../../context/AuthContext"; // Updated import
import moment from "moment/moment";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobExperience, setJobExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [JsonResponse, setJsonResponse] = useState([]);
  const router = useRouter();
  const { user, isSignedIn } = useAuth(); // Changed from useUser to useAuth

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!jobPosition || !jobDesc || !jobExperience) {
        toast.error("Please fill in all required fields");
        setLoading(false);
        return;
      }

      const InputPrompt = `Job Position: ${jobPosition}, Job Description: ${jobDesc}, Years of Experience: ${jobExperience}. Depends on Job Position, Job Description & Years of Experience, give me the ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} interview questions along with answers in JSON format.`;

      // Get response from chat AI session
      const result = await chatSession.sendMessage(InputPrompt);

      // Log the raw response
      const rawResponse = await result.response.text();

      // Extract only the JSON part using regex (for more advanced cleaning)
      let jsonStart = rawResponse.indexOf("[");
      let jsonEnd = rawResponse.lastIndexOf("]");

      // Validate if the array markers were found
      if (jsonStart === -1 || jsonEnd === -1) {
        toast.error("Couldn't generate proper interview questions. Please try again.");
        setLoading(false);
        return;
      }

      let cleanedResponse = rawResponse.substring(jsonStart, jsonEnd + 1);

      try {
        const MockJsonResp = JSON.parse(cleanedResponse);

        if (!Array.isArray(MockJsonResp) || MockJsonResp.length === 0) {
          toast.error("Generated questions are invalid. Please try again.");
          setLoading(false);
          return;
        }

        setJsonResponse(MockJsonResp);

        // Insert into DB
        const resp = await db
          .insert(MockInterview)
          .values({
            mockId: uuidv4(),
            jsonMockResp: cleanedResponse,
            jobPosition: jobPosition,
            jobDesc: jobDesc,
            jobExperience: jobExperience,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            createdAt: moment().format("DD-MM-yyyy"),
          })
          .returning({ mockId: MockInterview.mockId });

        if (!resp || resp.length === 0) {
          toast.error("Failed to create interview. Please try again.");
          setLoading(false);
          return;
        }

        toast.success("Interview created successfully!");
        setOpenDialog(false);
        router.push("/dashboard/interview/" + resp[0].mockId);
      } catch (parseError) {
        console.error("JSON Parsing Error:", parseError);
        toast.error("Failed to process AI response. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <div className="p-4 shadow-sm rounded-lg border-2 border-gray-200">
          {isSignedIn && (
            <div className="flex items-center space-x-4 my-5">
              <div>
                <h2 className="flex gap-1 text-slate-800 font-bold text-lg">
                  <span className="p-1 rounded-sm">
                    <FaUser />
                  </span>
                  <span className="font-normal">{user?.fullName}</span>
                </h2>
                <p className="flex gap-1 text-slate-800 font-bold text-lg">
                  <span className="p-1 rounded-sm">
                    <IoMail className="w-5 h-5" />
                  </span>
                  <span className="font-normal">
                    {user?.primaryEmailAddress?.emailAddress}
                  </span>
                </p>
              </div>
            </div>
          )}
          <Button
            onClick={() => setOpenDialog(true)}
            className="w-full rounded-md bg-slate-600 hover:bg-slate-700"
          >
            Create New Interview +
          </Button>
        </div>

        <Dialog open={openDialog}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-gray-700 text-2xl">
                Tell us more about your job interview
              </DialogTitle>
              <DialogDescription>
                <form onSubmit={onSubmit}>
                  <div>
                    <h2>
                      Add Details about your job position/role, description, and
                      years of experience
                    </h2>
                    <div className="mt-7 my-3">
                      <label className="text-gray-600 font-bold">
                        Job Role / Job Position
                      </label>
                      <Input
                        placeholder="Ex. Full Stack Developer"
                        required
                        autoComplete="off"
                        onChange={(event) =>
                          setJobPosition(event.target.value)
                        }
                        className="mt-2 bg-slate-100"
                      />
                    </div>
                    <div className="my-3">
                      <label className="text-gray-600 font-bold">
                        Job Description / Tech Stack
                      </label>
                      <Textarea
                        className="mt-2 bg-slate-100"
                        placeholder="Ex. ReactJS, NextJS, TypeScript, Java, Python etc."
                        autoComplete="off"
                        required
                        onChange={(event) => setJobDesc(event.target.value)}
                      />
                    </div>
                    <div className="my-3">
                      <label className="text-gray-600 font-bold">
                        Years of Experience
                      </label>
                      <Input
                        className="mt-2 bg-slate-100 mb-5"
                        placeholder="Ex. 5"
                        type="number"
                        required
                        max="50"
                        onChange={(event) =>
                          setJobExperience(event.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="flex gap-5 justify-end">
                    <Button
                      variant="ghost"
                      onClick={() => setOpenDialog(false)}
                      type="button"
                    >
                      Close
                    </Button>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {loading ? (
                        <>
                          <LoaderCircle className="animate-spin" />
                          Generating from AI
                        </>
                      ) : (
                        "Start Interview"
                      )}
                    </Button>
                  </div>
                </form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default AddNewInterview;
