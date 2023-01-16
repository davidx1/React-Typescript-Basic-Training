import { Preview } from "./components/Preview";
import { Select } from "./components/Select";
import { useBookingState } from "./hooks/useBookingState";

export interface RocketInfo {
  label: string;
  description: string;
}
export interface MealInfo {
  label: string;
  calories: number;
}
export interface LuggageSizeInfo {
  label: string;
  height: number;
  width: number;
}
export interface Options {
  rockets: RocketInfo[];
  meals: MealInfo[];
  luggageSizes: LuggageSizeInfo[];
}

export const Exercise = () => {
  const {
    rocket,
    meal,
    luggageSize,
    setRocket,
    setMeal,
    setLuggageSize,
    options,
    submitSelection,
  } = useBookingState();

  if (!options || !rocket || !meal || !luggageSize) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h2>Exercise 22</h2>
      <Preview rocket={rocket} meal={meal} luggageSize={luggageSize} />
      <Select<RocketInfo>
        options={options.rockets}
        value={rocket}
        onChange={setRocket}
      />
      <Select<MealInfo>
        options={options.meals}
        value={meal}
        onChange={setMeal}
      />
      <Select<LuggageSizeInfo>
        options={options.luggageSizes}
        value={luggageSize}
        onChange={setLuggageSize}
      />
      <button onClick={submitSelection}>Submit</button>
    </div>
  );
};
