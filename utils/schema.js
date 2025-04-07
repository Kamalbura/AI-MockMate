const { pgTable, serial, text, timestamp, json, varchar, boolean } = require('drizzle-orm/pg-core');

// Mock Interview table schema
const mockInterviews = pgTable('mock_interviews', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull(),
  position: text('position').notNull(),
  description: text('description'),
  experience: text('experience'),
  questions: json('questions'),
  createdAt: timestamp('created_at').defaultNow(),
  isCompleted: boolean('is_completed').default(false)
});

// User Answers table schema
const userAnswers = pgTable('user_answers', {
  id: serial('id').primaryKey(),
  interviewId: serial('interview_id').references(() => mockInterviews.id),
  questionIndex: serial('question_index'),
  answer: text('answer'),
  feedback: json('feedback'),
  createdAt: timestamp('created_at').defaultNow()
});

// Export tables
module.exports = { mockInterviews, userAnswers };