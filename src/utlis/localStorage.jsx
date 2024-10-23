const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          title: "Task 1",
          description: "Description for task 1",
          date: "2024-10-01",
          category: "Development",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          title: "Task 2",
          description: "Description for task 2",
          date: "2024-10-02",
          category: "Testing",
          active: true,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          title: "Task 3",
          description: "Description for task 3",
          date: "2024-10-03",
          category: "Deployment",
          active: false,
          newTask: false,
          completed: false,
          failed: true,
        },
      ],
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          title: "Task 1",
          description: "Description for task 1",
          date: "2024-10-04",
          category: "Design",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          title: "Task 2",
          description: "Description for task 2",
          date: "2024-10-05",
          category: "Research",
          active: true,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          title: "Task 3",
          description: "Description for task 3",
          date: "2024-10-06",
          category: "Analysis",
          active: false,
          newTask: false,
          completed: false,
          failed: true,
        },
      ],
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          title: "Task 1",
          description: "Description for task 1",
          date: "2024-10-07",
          category: "Support",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          title: "Task 2",
          description: "Description for task 2",
          date: "2024-10-08",
          category: "Maintenance",
          active: true,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          title: "Task 3",
          description: "Description for task 3",
          date: "2024-10-09",
          category: "Training",
          active: false,
          newTask: false,
          completed: false,
          failed: true,
        },
      ],
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          title: "Task 1",
          description: "Description for task 1",
          date: "2024-10-10",
          category: "Marketing",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          title: "Task 2",
          description: "Description for task 2",
          date: "2024-10-11",
          category: "Sales",
          active: true,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          title: "Task 3",
          description: "Description for task 3",
          date: "2024-10-12",
          category: "Strategy",
          active: false,
          newTask: false,
          completed: false,
          failed: true,
        },
      ],
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          title: "Task 1",
          description: "Description for task 1",
          date: "2024-10-13",
          category: "Documentation",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          title: "Task 2",
          description: "Description for task 2",
          date: "2024-10-14",
          category: "Compliance",
          active: true,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          title: "Task 3",
          description: "Description for task 3",
          date: "2024-10-15",
          category: "Review",
          active: false,
          newTask: false,
          completed: false,
          failed: true,
        },
      ],
    }
  ];
  
  const admin = [{
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
      
  ];
  export const setLocalStorage =() =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

  }

  export const  getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    
    const admin = JSON.parse(localStorage.getItem('admin'))
   
    return {employees,admin};

  }
        
        
        
        
        