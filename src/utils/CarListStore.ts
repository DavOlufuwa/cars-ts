import { create } from "zustand";
import { persist } from "zustand/middleware"

export interface CarList {
  id: number;
  name: string;
  year: string;
  bodyStyle: string;
  seatingCapacity: number;
  door: string;
  price: number;
  images: {
    url: string,
    alt: string}[];
  combinedMPGMilesPerGallon: number;
  driveTrain: string;
  engine: string;
  tankCapacity: number;
  interior: string[];
  saftey: string[];
}


export const useCarList = create<{
  allCars: CarList[],
  setAllCars: (cars: CarList[]) => void
}>()(persist((set) => ({
  allCars: [],
  setAllCars: (cars: CarList[]) => set({allCars: cars}) 
}),{
  name: "carlist",
}))


fetch("/carlist.json")
.then(res => res.json())
.then(data => {
  useCarList.getState().setAllCars(data)
})



