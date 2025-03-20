"use client";
import React, { useState } from "react";
import { Card, Steps, Button, Input, Select } from "antd";
import { useRouter } from "next/navigation";

const { Option } = Select;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "rgba(7, 6, 7, 0.57)",
    overflow: "hidden",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
    marginBottom: "20px",
  },
  card: {
    width: "40%",
    minWidth: "500px",
    padding: "30px",
    background: "rgba(185, 144, 209, 0.57)",
    boxShadow: "0 4px 12px rgba(178, 148, 195, 0.57)",
    borderRadius: "10px",
    textAlign: "center",
  },
  stepsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
    position: "relative",
  },
  stepLine: (isActive) => ({
    flex: 1,
    height: "4px",
    background: isActive ? "rgba(10, 1, 15, 0.57)" : "#d9d9d9",
    transition: "background 0.3s ease-in-out",
    margin: "0 5px",
  }),
  stepCircle: (isActive) => ({
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    background: isActive ? "black" : "#d9d9d9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
  }),
  content: {
    marginTop: "20px",
    minHeight: "120px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  errorText: {
    color: "rgba(65, 1, 1, 0.93)",
    fontSize: "19px",
    marginTop: "4px",
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    border: "none",
    transition: "0.3s",
  },
  input: {
    backgroundColor: "white",
    color: "black",
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #d9d9d9",
  },
};

export default function Signup() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const steps = [
    {
      title: "Basic Info",
      fields: [
        {
          field: "firstName",
          type: "text",
          placeholder: "Enter your first name",
        },
        {
          field: "lastName",
          type: "text",
          placeholder: "Enter your last name",
        },
        { field: "username", type: "text", placeholder: "Enter your username" },
      ],
    },
    {
      title: "Additional Info",
      fields: [
        {
          field: "college",
          type: "text",
          placeholder: "Enter your college name",
        },
        { field: "bio", type: "textarea", placeholder: "Enter your bio" },
        { field: "city", type: "text", placeholder: "Enter your city" },
        { field: "country", type: "text", placeholder: "Enter your country" },
        { field: "technology", type: "select" },
      ],
    },
    {
      title: "Security Info",
      fields: [
        { field: "email", type: "text", placeholder: "Enter your email" },
        {
          field: "password",
          type: "password",
          placeholder: "Create a password",
        },
      ],
    },
  ];

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" });
  };

  const validateFields = () => {
    const newErrors = {};
    steps[current].fields.forEach(({ field }) => {
      if (!formData[field]) {
        newErrors[field] = "Please fill this";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (validateFields()) {
      setCurrent(current + 1);
    }
  };

  const prev = () => setCurrent(current - 1);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign Up</h2>
      <Card style={styles.card} variant="outlined">
        <div style={styles.stepsContainer}>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div style={styles.stepCircle(index <= current)}>{index + 1}</div>
              {index < steps.length - 1 && (
                <div style={styles.stepLine(index < current)}></div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div style={styles.content}>
          {steps[current].fields.map((fieldObj, index) => (
            <div key={index}>
              {fieldObj.type === "select" ? (
                <Select
                  placeholder="Choose Tech"
                  style={styles.input}
                  value={formData[fieldObj.field] || ""}
                  onChange={(value) => handleChange(fieldObj.field, value)}
                >
                  <Option value="">Choose Tech</Option>
                  <Option value="Web Development">Web Development</Option>
                  <Option value="App Development">App Development</Option>
                  <Option value="Full Stack">Full Stack</Option>
                  <Option value="Mern Stack">Mern Stack</Option>
                  <Option value="Ai/Ml">Ai/Ml</Option>
                  <Option value="DevOps">DevOps</Option>
                  <Option value="Cyber Security">Cyber Security</Option>
                  <Option value="IoT">IoT</Option>
                  <Option value="Robotics">Robotics</Option>
                  <Option value="Blockchain">Blockchain</Option>
                </Select>
              ) : (
                <Input
                  type={fieldObj.type}
                  placeholder={fieldObj.placeholder}
                  style={styles.input}
                  value={formData[fieldObj.field] || ""}
                  onChange={(e) => handleChange(fieldObj.field, e.target.value)}
                />
              )}
              {errors[fieldObj.field] && (
                <div style={styles.errorText}>{errors[fieldObj.field]}</div>
              )}
            </div>
          ))}
        </div>

        <div style={styles.buttonContainer}>
          {current > 0 && (
            <Button style={styles.button} onClick={prev}>
              Previous
            </Button>
          )}
          {current < steps.length - 1 ? (
            <Button style={styles.button} onClick={next}>
              Next
            </Button>
          ) : (
            <Button style={styles.button} onClick={() => router.push("/")}>
              Sign Up
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
