import { Provider } from "@/components/ContextProvider";
import { Body } from "@/components/Body";
export default function Home() {
  return (
    <Provider>
      <Body />
    </Provider>
  );
}
