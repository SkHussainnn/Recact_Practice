import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, InputGroup } from "react-bootstrap";

export default function Login({setIsLoggedIn}) {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  let login = (e) => {
    e.preventDefault();
    if (phone == 9827740560) {
      alert("Login successful");
      localStorage.setItem("login", "true");
      setIsLoggedIn(true);
      navigate("/home");
    } else {
      alert("Invalid mobile number");
    }
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center vh-100"
      style={{ background: "#f0f4ff" }}
    >
      <Card
        className="p-4 shadow"
        style={{ width: "100%", maxWidth: "400px", borderRadius: "20px", border: "none" }}
      >
        <div
          className="mb-3 d-flex align-items-center justify-content-center"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "16px",
            background: "#eff6ff",
            fontSize: "26px",
          }}
        >
          📱
        </div>

        <h1 className="fw-bold mb-1" style={{ fontSize: "1.6rem", color: "#1e293b" }}>
          User Login
        </h1>
        <p className="text-secondary mb-4" style={{ fontSize: "14px" }}>
          Enter your registered mobile number
        </p>

        <Form onSubmit={login}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold text-secondary" style={{ fontSize: "13px" }}>
              Mobile Number
            </Form.Label>
            <InputGroup>
              <InputGroup.Text
                style={{ background: "#f8fafc", color: "#1e40af", fontWeight: "600" }}
              >
                +91
              </InputGroup.Text>
              <Form.Control
                type="tel"
                placeholder="98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                required
                style={{ letterSpacing: "0.05em" }}
              />
            </InputGroup>
          </Form.Group>

          <Button
            type="submit"
            className="w-100 fw-semibold mt-2"
            style={{
              background: "linear-gradient(135deg, #1e40af, #3b82f6)",
              border: "none",
              borderRadius: "10px",
              padding: "13px",
              fontSize: "15px",
              boxShadow: "0 4px 14px rgba(59,130,246,0.4)",
            }}
          >
            Login
          </Button>
        </Form>

        <p className="text-center mt-3 text-secondary" style={{ fontSize: "14px" }}>
          Don't have an account?{" "}
          <a href="/register" className="text-primary fw-semibold text-decoration-none">
            Register here
          </a>
        </p>
      </Card>
    </Container>
  );
}