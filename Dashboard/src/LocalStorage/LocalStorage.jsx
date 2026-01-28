// localStorage.clear()
const employees = [
  {
    id: 1,
    email: "employee1@company.com",
    name: "Nishant Ji",
    password: "123",

    taskCount: {
      total: 4,
      completed: 1,
      active: 1,
      failed: 1,
      newTask: 1
    },

    tasks: [
      {
        title: "Build Login Page",
        description: "Create responsive login UI using React and Tailwind CSS.",
        date: "2026-01-10",
        category: "Development",
        active: false,
        completed: true,
        failed: false,
        newTask: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve alignment issues in mobile navbar.",
        date: "2026-01-15",
        category: "Bug Fix",
        active: true,
        completed: false,
        failed: false,
        newTask: false
      },
      {
        title: "API Integration",
        description: "Integrate login API with frontend.",
        date: "2026-01-18",
        category: "Backend",
        active: false,
        completed: false,
        failed: false,
        newTask: true
      },
      {
        title: "Write Unit Tests",
        description: "Add unit tests for login component.",
        date: "2026-01-05",
        category: "Testing",
        active: false,
        completed: false,
        failed: true,
        newTask: false
      }
    ]
  },

  {
    id: 2,
    email: "employee2@company.com",
    name: "Nikki Ji",
    password: "123",

    taskCount: {
      total: 4,
      completed: 2,
      active: 1,
      failed: 0,
      newTask: 1
    },

    tasks: [
      {
        title: "Design Dashboard UI",
        description: "Create dashboard wireframe and UI design.",
        date: "2026-01-08",
        category: "UI/UX",
        active: false,
        completed: true,
        failed: false,
        newTask: false
      },
      {
        title: "Dark Mode Support",
        description: "Add dark mode toggle functionality.",
        date: "2026-01-14",
        category: "Feature",
        active: true,
        completed: false,
        failed: false,
        newTask: false
      },
      {
        title: "Optimize Images",
        description: "Compress and optimize all assets.",
        date: "2026-01-12",
        category: "Performance",
        active: false,
        completed: true,
        failed: false,
        newTask: false
      },
      {
        title: "Accessibility Audit",
        description: "Check accessibility issues and fix them.",
        date: "2026-01-20",
        category: "Accessibility",
        active: false,
        completed: false,
        failed: false,
        newTask: true
      }
    ]
  },

  {
    id: 3,
    email: "employee3@company.com",
    name: "Nikita",
    password: "123",

    taskCount: {
      total: 4,
      completed: 2,
      active: 1,
      failed: 0,
      newTask: 1
    },

    tasks: [
      {
        title: "Create REST API",
        description: "Develop CRUD APIs for employees.",
        date: "2026-01-07",
        category: "Backend",
        active: false,
        completed: true,
        failed: false,
        newTask: false
      },
      {
        title: "Database Schema",
        description: "Design MongoDB schema for tasks.",
        date: "2026-01-09",
        category: "Database",
        active: false,
        completed: true,
        failed: false,
        newTask: false
      },
      {
        title: "Auth Middleware",
        description: "Implement JWT authentication middleware.",
        date: "2026-01-17",
        category: "Security",
        active: true,
        completed: false,
        failed: false,
        newTask: false
      },
      {
        title: "API Documentation",
        description: "Write API docs using Swagger.",
        date: "2026-01-22",
        category: "Documentation",
        active: false,
        completed: false,
        failed: false,
        newTask: true
      }
    ]
  },

  {
    id: 4,
    email: "employee4@company.com",
    name: "Saksh",
    password: "123",

    taskCount: {
      total: 4,
      completed: 1,
      active: 1,
      failed: 1,
      newTask: 1
    },

    tasks: [
      {
        title: "Test Payment Flow",
        description: "Test end-to-end payment functionality.",
        date: "2026-01-06",
        category: "Testing",
        active: false,
        completed: false,
        failed: true,
        newTask: false
      },
      {
        title: "Bug Report",
        description: "Report and document payment bugs.",
        date: "2026-01-11",
        category: "QA",
        active: false,
        completed: true,
        failed: false,
        newTask: false
      },
      {
        title: "Regression Testing",
        description: "Perform regression testing after fixes.",
        date: "2026-01-16",
        category: "Testing",
        active: true,
        completed: false,
        failed: false,
        newTask: false
      },
      {
        title: "Test Case Writing",
        description: "Write test cases for checkout flow.",
        date: "2026-01-19",
        category: "Documentation",
        active: false,
        completed: false,
        failed: false,
        newTask: true
      }
    ]
  },

  {
    id: 5,
    email: "e@e.e",
    name: "Sample",
    password: "123",

    taskCount: {
      total: 4,
      completed: 2,
      active: 1,
      failed: 0,
      newTask: 1
    },

    tasks: [
      {
        title: "Deploy Application",
        description: "Deploy app on Vercel.",
        date: "2026-01-05",
        category: "DevOps",
        active: false,
        completed: true,
        failed: false,
        newTask: false
      },
      {
        title: "CI/CD Setup",
        description: "Configure GitHub Actions pipeline.",
        date: "2026-01-13",
        category: "DevOps",
        active: true,
        completed: false,
        failed: false,
        newTask: false
      },
      {
        title: "Environment Variables",
        description: "Setup production environment variables.",
        date: "2026-01-14",
        category: "Configuration",
        active: false,
        completed: true,
        failed: false,
        newTask: false
      },
      {
        title: "Server Monitoring",
        description: "Add monitoring and logging tools.",
        date: "2026-01-21",
        category: "Monitoring",
        active: false,
        completed: false,
        failed: false,
        newTask: true
      }
    ]
  }
]



const admin = [
  {
    id: 1,
    email: "admin@company.com",
    password: "123"
  }
]



export const SetlocalStorageData = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees))
  }

  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin))
  }
}
export const GetlocalStorageData = () => {
  return {
    employees: JSON.parse(localStorage.getItem("employees")),
    admin: JSON.parse(localStorage.getItem("admin"))
  }
}
