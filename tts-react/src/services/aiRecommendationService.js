import { coursesCatalog } from '../data/coursesCatalog';

// System Rules & Prompt Definition
const SYSTEM_PROMPT = `
You are an expert AI Career Counselor working for TechnoKraft Training & Solution, Nashik.
Your responsibility is to analyze the user's career goals and recommend ONLY courses available in our official database.

RULES:
1. Never invent courses outside the provided catalog.
2. Never modify course names or fees.
3. Recommend maximum 3 courses and minimum 1 course (unless goal is vague/unclear).
4. Sort recommendations by relevance (highest matchScore first).
5. If user goal is unclear, ask follow-up questions in 'nextQuestion'.
6. Always return valid JSON.
`;

/**
 * Intelligent Semantic Recommendation Engine
 * Calculates keyword relevance, skill overlaps, and career role alignments
 */
export async function getAiRecommendations({ goal, experience, education, budget, duration }) {
  // Simulate 1.5s network AI analysis step to create realistic counselor feel
  await new Promise(resolve => setTimeout(resolve, 1500));

  if (!goal || goal.trim().length < 3) {
    return {
      success: true,
      summary: "I'd love to help you find the perfect course! Could you share a bit more about your career interest?",
      recommendations: [],
      nextQuestion: "What tech domain interests you the most? (e.g. Web Development, Data Science, Cyber Security, Cloud & DevOps, or SAP?)"
    };
  }

  const query = goal.toLowerCase();
  
  // Detect vague query
  const vagueTerms = ["don't know", "dont know", "not sure", "anything", "suggest me", "help me choose"];
  const isVague = vagueTerms.some(term => query.includes(term)) && query.length < 25;

  if (isVague) {
    return {
      success: true,
      summary: "Starting a tech career is an exciting step! To give you the best guidance, tell me a little about your preference.",
      recommendations: [],
      nextQuestion: "Which area sounds more appealing to you?\n1. Building websites & web apps (Full Stack / Frontend)\n2. Working with data & AI (Data Science / Analytics)\n3. Managing networks & security (Cyber Security / CCNA)\n4. Cloud infrastructure & DevOps"
    };
  }

  // Scoring engine against all 115 courses in catalog
  const scoredCourses = coursesCatalog.map(course => {
    let score = 50; // base score
    const courseName = course.course_name.toLowerCase();
    const category = course.category.toLowerCase();
    const desc = course.description.toLowerCase();
    const skills = course.skills.map(s => s.toLowerCase());
    const roles = course.career_roles.map(r => r.toLowerCase());

    // 1. Direct course name match
    if (query.includes(courseName)) score += 45;

    // 2. Category match
    if (category.split(' ').some(word => word.length > 3 && query.includes(word))) score += 25;

    // 3. Keyword / Skill matches
    skills.forEach(skill => {
      if (query.includes(skill)) score += 20;
    });

    // 4. Role matches
    roles.forEach(role => {
      if (query.includes(role)) score += 25;
    });

    // Domain specific triggers
    if ((query.includes("ai") || query.includes("artificial intelligence") || query.includes("data scientist")) && 
        (courseName.includes("data science") || courseName.includes("artificial intelligence") || courseName.includes("machine learning"))) {
      score += 35;
    }

    if ((query.includes("web") || query.includes("website") || query.includes("fullstack") || query.includes("full stack")) && 
        (courseName.includes("full stack") || courseName.includes("react") || courseName.includes("web development"))) {
      score += 35;
    }

    if ((query.includes("backend") || query.includes("server")) && 
        (courseName.includes("backend") || courseName.includes("spring boot") || courseName.includes("node") || courseName.includes("python"))) {
      score += 30;
    }

    if ((query.includes("network") || query.includes("security") || query.includes("hacking")) && 
        (courseName.includes("ccna") || courseName.includes("cyber security") || courseName.includes("ethical hacking") || courseName.includes("networking"))) {
      score += 35;
    }

    if ((query.includes("cloud") || query.includes("devops") || query.includes("aws")) && 
        (courseName.includes("aws") || courseName.includes("devops") || courseName.includes("azure") || courseName.includes("kubernetes"))) {
      score += 35;
    }

    if ((query.includes("sap") || query.includes("erp")) && courseName.includes("sap")) {
      score += 40;
    }

    if ((query.includes("test") || query.includes("qa") || query.includes("testing")) && courseName.includes("testing")) {
      score += 40;
    }

    // Budget check
    if (budget && course.numeric_fees <= budget) {
      score += 5;
    }

    // Cap match score between 75% and 99% for top matches
    const matchScore = Math.min(99, Math.max(70, score));

    return { ...course, matchScore };
  });

  // Sort by match score descending
  scoredCourses.sort((a, b) => b.matchScore - a.matchScore);

  // Take top 1 to 3 matches
  const topMatches = scoredCourses.slice(0, 3).filter(c => c.matchScore >= 75);
  
  // If top matches empty, fallback to top 2 highest
  const finalMatches = topMatches.length > 0 ? topMatches : scoredCourses.slice(0, 2);

  const recommendations = finalMatches.map(c => ({
    courseId: c.id,
    courseName: c.course_name,
    matchScore: c.matchScore,
    reason: `This course covers ${c.skills.slice(0, 3).join(', ')} which directly align with your target goal of '${goal}'.`,
    skills: c.skills,
    careerRoles: c.career_roles,
    fees: c.fees,
    learningPath: [
      `Phase 1: ${c.skills[0] || 'Core Fundamentals'} Basics & Architecture`,
      `Phase 2: Advanced ${c.skills[1] || 'Frameworks'} & Database Integration`,
      "Phase 3: Real-World Industry Capstone Project",
      "Phase 4: Resume Building & Mock Technical Interviews"
    ],
    confidence: c.matchScore >= 90 ? "High" : c.matchScore >= 80 ? "Medium-High" : "Medium"
  }));

  return {
    success: true,
    summary: `Based on your goal "${goal}", our AI Counselor recommends the following top ${recommendations.length} training program(s) from our Nashik center catalog:`,
    recommendations,
    nextQuestion: ""
  };
}

/**
 * Lead Collection & Personalized Roadmap Service
 */
export async function saveLeadAndGenerateRoadmap(leadData) {
  // Simulate lead registration API response
  await new Promise(resolve => setTimeout(resolve, 800));

  const leadId = "LEAD-" + Math.floor(100000 + Math.random() * 900000);
  const dateStr = new Date().toISOString().split('T')[0];

  const roadmap = [
    { month: "Month 1", title: "Foundations & Environment Setup", desc: `Master fundamental concepts, version control (Git), and core syntax for ${leadData.recommendedCourse || 'your chosen domain'}.` },
    { month: "Month 2", title: "Frameworks & Deep Dive", desc: "Build modular applications, handle APIs, databases, and clean architecture practices." },
    { month: "Month 3", title: "Real-World Live Project", desc: "Collaborate on a production-level capstone project matching IT company standards." },
    { month: "Month 4", title: "ATS Resume & Portfolio Building", desc: "Craft an impressive GitHub portfolio, optimized resume, and LinkedIn professional branding." },
    { month: "Month 5", title: "1-on-1 Mock Interviews & Campus Placement", desc: "Participate in intensive technical & HR mock interviews with corporate hiring partners." }
  ];

  return {
    success: true,
    leadId,
    message: "Thank you! Your free personalized career roadmap has been generated.",
    createdAt: dateStr,
    roadmap
  };
}
