import { render, screen } from "@testing-library/react";
import StatsItem from "../StatsItem";

describe("StatsItem testing", () => {
  it("should render 1.03 days when params is mars", () => {
    render(<StatsItem data={1.03} />);
    const statsElement = screen.getByText(/1.03 Days/i);
    expect(statsElement).toBeInTheDocument();
  });
});
