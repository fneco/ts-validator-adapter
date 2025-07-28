export type Input = {
  email: string;
  password: string;
  addresses: {
    address: string;
    isPrimary?: boolean | undefined;
  }[];
};

export const input: Input = {
  email: "sample@gmail.com",
  password: "password",
  addresses: [
    {
      address: "123 Main St",
      isPrimary: true,
    },
    {
      address: "456 Elm St",
    },
  ],
};
