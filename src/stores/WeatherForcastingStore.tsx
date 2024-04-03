import { createStore } from "zustand/vanilla";
import { useStore } from "zustand";
import { devtools } from "zustand/middleware";

type WeatherForcastingStore = {
    selectedCityIds: number[] | undefined;
    actions: {
        setSelectedCityIds: (selectedCityIds: number[]) => void;
    };
};

const weatherForcastingStore = createStore<WeatherForcastingStore>()(
    devtools(
        (set, get) => ({
            selectedCityIds: undefined,
            actions: {
                setSelectedCityIds: (selectedCityIds: number[] | undefined) => {
                    set({
                        selectedCityIds: selectedCityIds
                    })
                },
            },
        }),
        {
            name: "error-status-management-store",
            enabled: !import.meta.env.PROD,
        }
    )
);

export type ExtractState<S> = S extends {
    getState: () => infer T;
}
    ? T
    : never;

type Params<U> = Parameters<typeof useStore<typeof weatherForcastingStore, U>>;

function useWeatherForcastingStore<U>(selector: Params<U>[1], equalityFn?: Params<U>[2]) {
    return useStore(weatherForcastingStore, selector, equalityFn);
}

const selectedCityIdsSelector = (state: ExtractState<typeof weatherForcastingStore>) => state.selectedCityIds;


const actionsSelector = (state: ExtractState<typeof weatherForcastingStore>) => state.actions;

export const getWeatherForcastingActions = () => actionsSelector(weatherForcastingStore.getState());
export const useSelectedCityIds = () => useWeatherForcastingStore(selectedCityIdsSelector);
