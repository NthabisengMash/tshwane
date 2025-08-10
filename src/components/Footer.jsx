// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-dark text-white py-6 mt-12 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tshwane Transit App. Built for the people of Tshwane.
        </p>
        <p className="text-xs mt-2">
          Inspired by{" "}
          <a href="https://www.areyeng.co.za/" className="text-accent underline" target="_blank" rel="noopener noreferrer">
            A Re Yeng
          </a>{" "}
          and{" "}
          <a href="https://www.tshwane.gov.za/" className="text-accent underline" target="_blank" rel="noopener noreferrer">
            City of Tshwane
          </a>.
        </p>
      </footer>
    );
  }
  