export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType

type FunctionType = Exclude<SomeTypes, string | number>
type NonFunctionType = Exclude<SomeTypes, DebugType>
type TypeExcludeFunction = Exclude<SomeTypes, Function>

type FunctionTypeExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeExtract = Extract<SomeTypes, string | number>;

type NullableTypes = string | number | null | undefined
type NonNullableTypes = NonNullable<NullableTypes>