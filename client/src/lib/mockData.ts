
export const studentData = {
  id: "ST-2024-001",
  name: "Alex Johnson",
  avatar: "https://github.com/shadcn.png",
  grade: "10th Grade",
  attendance: 92,
  participationScore: 85,
  behavioralScore: 95,
  riskLevel: "Low",
  subjects: [
    { name: "Mathematics", score: 88, trend: "up" },
    { name: "Science", score: 76, trend: "down" },
    { name: "English", score: 92, trend: "stable" },
    { name: "History", score: 85, trend: "up" },
    { name: "Computer Science", score: 95, trend: "up" },
  ],
  assignments: [
    { id: 1, title: "Algebra Worksheet", subject: "Math", status: "Completed", dueDate: "2024-10-15" },
    { id: 2, title: "Lab Report: Photosynthesis", subject: "Science", status: "Pending", dueDate: "2024-10-20" },
    { id: 3, title: "Essay: Industrial Revolution", subject: "History", status: "Completed", dueDate: "2024-10-12" },
    { id: 4, title: "React Project", subject: "CS", status: "In Progress", dueDate: "2024-10-25" },
  ],
  attendanceHistory: [
    { day: "Mon", present: true },
    { day: "Tue", present: true },
    { day: "Wed", present: false },
    { day: "Thu", present: true },
    { day: "Fri", present: true },
  ],
  improvementData: [
    { week: "Week 1", score: 75 },
    { week: "Week 2", score: 78 },
    { week: "Week 3", score: 76 },
    { week: "Week 4", score: 82 },
    { week: "Week 5", score: 85 },
    { week: "Week 6", score: 88 },
  ],
  recommendations: [
    {
      id: 1,
      type: "Academic",
      title: "Focus on Chemistry",
      description: "Your recent Science quiz scores show a dip in Chemistry topics. Review Chapter 4.",
      priority: "High",
    },
    {
      id: 2,
      type: "Habit",
      title: "Consistent Study Time",
      description: "You study late at night. Try shifting to early evening for better retention.",
      priority: "Medium",
    },
    {
      id: 3,
      type: "Participation",
      title: "Speak up in History",
      description: "You have great essay scores but low participation in History class discussions.",
      priority: "Low",
    },
  ]
};
