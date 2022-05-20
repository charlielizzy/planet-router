import { render, screen } from "@testing-library/react";
import Info from "../Info";

// passes test due to being in nav bar always
describe("Info testing", () => {
  it("should render venus as planet name when props.name is venus", () => {
    render(<Info name={"venus"} />);
    const infoElement = screen.getByText(/venus/i);
    expect(infoElement).toBeInTheDocument();
  });

  it("should render mars description when props.name is mars", () => {
    render(<Info name={"mars"} />);
    const infoElement = screen.getByText(/Red Planet/i);
    expect(infoElement).toBeInTheDocument();
  });
});
