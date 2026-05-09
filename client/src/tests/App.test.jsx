import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "../App";

vi.mock("../services/projectsService", () => ({
  default: {
    getProjects: vi.fn(() => Promise.resolve([])),
  },
}));

describe("App", () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.removeAttribute("class");
  });

  it("renders", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Myles Murphy Portfolio/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  describe("theme toggle", () => {
    it("starts in light mode and syncs body class and localStorage", () => {
      render(<App />);
      expect(
        screen.getByRole("button", { name: /switch to dark mode/i }),
      ).toBeInTheDocument();
      expect(document.body.classList.contains("dark-mode")).toBe(false);
      expect(localStorage.getItem("portfolio-theme")).toBe("light");
    });

    it("applies dark mode when portfolio-theme is dark in localStorage", () => {
      localStorage.setItem("portfolio-theme", "dark");
      render(<App />);
      expect(document.body.classList.contains("dark-mode")).toBe(true);
      expect(
        screen.getByRole("button", { name: /switch to light mode/i }),
      ).toBeInTheDocument();
    });

    it("toggles to dark mode on click", async () => {
      const user = userEvent.setup();
      render(<App />);
      await user.click(
        screen.getByRole("button", { name: /switch to dark mode/i }),
      );
      expect(document.body.classList.contains("dark-mode")).toBe(true);
      expect(localStorage.getItem("portfolio-theme")).toBe("dark");
      expect(
        screen.getByRole("button", { name: /switch to light mode/i }),
      ).toBeInTheDocument();
    });

    it("toggles back to light mode on second click", async () => {
      const user = userEvent.setup();
      render(<App />);
      await user.click(
        screen.getByRole("button", { name: /switch to dark mode/i }),
      );
      await user.click(
        screen.getByRole("button", { name: /switch to light mode/i }),
      );
      expect(document.body.classList.contains("dark-mode")).toBe(false);
      expect(localStorage.getItem("portfolio-theme")).toBe("light");
    });
  });
});
