export type User = {
    
    user_email_name: string,
    user_password: string
}

export type DBUser = {
    id: string; // UUID
    email: string;
    user_password: string;
    date_created: string;
    userId: number;
  };