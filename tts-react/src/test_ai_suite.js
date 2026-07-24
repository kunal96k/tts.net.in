import { getAiRecommendations } from './services/aiRecommendationService.js';

const testCases = [
  {
    id: 1,
    title: "AI Engineer",
    input: "I want to become an AI Engineer. I am a beginner and have completed B.Tech. I can spend around ₹20,000 and study for 6 months.",
    expectedKeywords: ["Data Science", "Python", "Machine Learning", "Artificial Intelligence", "AI"]
  },
  {
    id: 2,
    title: "Web Developer",
    input: "I want to build modern websites and become a Frontend Developer.",
    expectedKeywords: ["React", "Angular", "JavaScript", "HTML", "CSS", "Web Development"]
  },
  {
    id: 3,
    title: "Full Stack Developer",
    input: "I want to become a Full Stack Developer and get a job within 6 months.",
    expectedKeywords: ["MERN Stack", "Full Stack Python", "Full Stack Java", "Full Stack"]
  },
  {
    id: 4,
    title: "Backend Developer",
    input: "I enjoy Java programming and want to build REST APIs and Microservices.",
    expectedKeywords: ["Spring Boot", "Java", "Backend"]
  },
  {
    id: 5,
    title: "Data Scientist",
    input: "I love mathematics and statistics. I want to work with Machine Learning.",
    expectedKeywords: ["Data Science", "Python", "Machine Learning", "Artificial Intelligence"]
  },
  {
    id: 6,
    title: "Networking (No Coding)",
    input: "I don't like coding. I want a career in networking and infrastructure.",
    expectedKeywords: ["CCNA", "Networking", "Cyber Security", "Cisco"]
  },
  {
    id: 7,
    title: "Cyber Security",
    input: "I want to become an Ethical Hacker.",
    expectedKeywords: ["Cyber Security", "Ethical Hacking", "Penetration Testing"]
  },
  {
    id: 8,
    title: "Beginner (12th Passed)",
    input: "I just completed 12th and don't know which IT course is best for me.",
    expectedQuestions: ["Do you enjoy coding?", "Do you like designing websites?", "budget"]
  },
  {
    id: 9,
    title: "Budget Constraint",
    input: "I want to learn AI but my budget is only ₹5000.",
    expectedKeywords: ["AI CRASH COURSE", "AI/ML Internship"]
  },
  {
    id: 10,
    title: "Career Change",
    input: "I'm currently working in sales but want to switch to software development.",
    expectedKeywords: ["Full Stack", "MERN Stack", "Java", "Python"]
  },
  {
    id: 11,
    title: "Internship Focus",
    input: "I want an internship course that helps me get real project experience.",
    expectedKeywords: ["Internship"]
  },
  {
    id: 12,
    title: "Salary Focus (>10 LPA)",
    input: "I want a software job with a salary above 10 LPA.",
    expectedKeywords: ["Data Science", "Full Stack", "Artificial Intelligence"]
  },
  {
    id: 13,
    title: "Wrong / Gibberish Input",
    input: "asdfghjkl",
    expectedText: "I'm not sure what career goal you have"
  },
  {
    id: 14,
    title: "Empty Input",
    input: "",
    expectedText: "Please tell me about your career goal."
  },
  {
    id: 15,
    title: "Multiple Interests",
    input: "I like AI, Web Development and Cyber Security. Which career should I choose?",
    expectedKeywords: ["AI", "Web", "Cyber Security"]
  }
];

async function runTestSuite() {
  console.log("\n=================================================");
  console.log("   AI RECOMMENDATION ENGINE - ACCURACY TEST SUITE ");
  console.log("=================================================\n");

  let passedCount = 0;

  for (const tc of testCases) {
    const res = await getAiRecommendations({ goal: tc.input });
    let passed = false;
    let details = "";

    if (tc.expectedQuestions) {
      const qText = res.nextQuestion || "";
      const matches = tc.expectedQuestions.every(eq => qText.toLowerCase().includes(eq.toLowerCase()));
      if (matches) {
        passed = true;
        details = `Asked clarification questions successfully.`;
      } else {
        details = `Expected questions missing in nextQuestion response.`;
      }
    } else if (tc.expectedText) {
      const fullText = (res.summary + " " + (res.nextQuestion || "")).toLowerCase();
      if (fullText.includes(tc.expectedText.toLowerCase())) {
        passed = true;
        details = `Correct fallback text returned: "${tc.expectedText}"`;
      } else {
        details = `Expected text "${tc.expectedText}" not found.`;
      }
    } else if (tc.expectedKeywords) {
      const recNames = res.recommendations.map(r => r.courseName.toUpperCase());
      const recSkills = res.recommendations.flatMap(r => r.skills.map(s => s.toUpperCase()));
      const allText = (res.summary + " " + recNames.join(" ") + " " + recSkills.join(" ")).toUpperCase();

      const matchedKw = tc.expectedKeywords.filter(kw => allText.includes(kw.toUpperCase()));
      if (matchedKw.length > 0) {
        passed = true;
        details = `Matched courses/skills: [${recNames.join(", ")}] (Matches: ${matchedKw.join(", ")})`;
      } else {
        details = `No expected keywords [${tc.expectedKeywords.join(", ")}] found in recommendations.`;
      }
    }

    if (passed) passedCount++;

    console.log(`Test Case ${tc.id}: ${tc.title}`);
    console.log(`Result: ${passed ? '✅ PASSED' : '❌ FAILED'}`);
    console.log(`Details: ${details}\n`);
  }

  const accuracyRate = ((passedCount / testCases.length) * 100).toFixed(2);
  console.log("=================================================");
  console.log(` TOTAL TEST CASES: ${testCases.length}`);
  console.log(` PASSED: ${passedCount}`);
  console.log(` FAILED: ${testCases.length - passedCount}`);
  console.log(` OVERALL ACCURACY RATE: ${accuracyRate}%`);
  console.log("=================================================\n");
}

runTestSuite();
