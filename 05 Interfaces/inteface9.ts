// type alias로 function을 만들 때
type EatType = (food: string) => void;

// interface로 function을 만들 때
interface Eat {
    (food: string): void;
}

// type alias로 array을 만들 때
type PersonList = string[];

// interface로 array을 만들 때
interface Personlst {
    [index: number]: string;
}

// intersection

interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface ArtistData {
    artists: { name: string }[];
}

type ArtistResponseType = ArtistData & ErrorHandling;

interface IArtistResponse extends ArtistData, ErrorHandling { };

// union

interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

type PetType = Bird | Fish;

interface IPet extends PetType { }; // Error
class Pet implements PetType { }; // Error


// Declaration Merging은 Interface는 가능하지만, Type Alias는 불가능하다!!
// Type Alias는 const처럼 재할당 및 Merge가 불가능하다.

// 