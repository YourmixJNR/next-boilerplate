// Represents a user in the application
interface IUser {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

// Represents an error returned by the API
interface APIError {
  code: number;
  message: string;
}

// Supported application themes
type Theme = "light" | "dark";

// Add more global types, interfaces, or declarations below as needed.
