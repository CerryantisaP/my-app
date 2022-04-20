import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Search from ".";
import store from "../../store";

test('should show search', () => {
    render(
        <Provider store={store}><Search /></Provider>);
    expect(screen.getByTestId("Search")).toBeInTheDocument()
});