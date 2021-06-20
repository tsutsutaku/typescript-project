export {};

type Profile = {
    name: string;
    age?: number;
    zipcode: number
};

// type Profile2 = {
    // name?: string;
    // age?: number;
// };

type PartialType = Partial<Profile>;

type RequiredType = Required<Profile>;