interface IUser {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface APIError {
  code: number;
  message: string;
}

type Theme = "light" | "dark";

// Add more global types, interfaces, or declarations below as needed.
