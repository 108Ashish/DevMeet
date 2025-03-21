"use client";
import React, { useState } from "react";
import { Card, Button, Input, Select, message } from "antd";
import { useRouter } from "next/navigation";
import styles from "./Signup.module.css";

const { Option } = Select;

export default function Signup() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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
        newErrors[field] = "Please fill this field";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        message.success("Signup successful! Redirecting...");
        router.push("/dashboard"); // Redirect user after signup
      } else {
        message.error(data.message || "Signup failed!");
      }
    } catch (error) {
      setLoading(false);
      message.error("Error connecting to the server.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Sign Up</h2>
      <Card className={styles.card} variant="outlined">
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div
                className={`${styles.stepCircle} ${
                  index <= current ? styles.active : ""
                }`}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`${styles.stepLine} ${
                    index < current ? styles.active : ""
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <form onSubmit={handleSubmit} className={styles.content}>
          {steps[current].fields.map((fieldObj, index) => (
            <div key={index}>
              {fieldObj.type === "select" ? (
                <Select
                  placeholder="Choose Tech"
                  className={styles.input}
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
                  className={styles.input}
                  value={formData[fieldObj.field] || ""}
                  onChange={(e) => handleChange(fieldObj.field, e.target.value)}
                />
              )}
              {errors[fieldObj.field] && (
                <div className={styles.errorText}>{errors[fieldObj.field]}</div>
              )}
            </div>
          ))}

          <div className={styles.buttonContainer}>
            {current > 0 && (
              <Button className={styles.button} onClick={prev}>
                Previous
              </Button>
            )}
            {current < steps.length - 1 ? (
              <Button className={styles.button} onClick={next}>
                Next
              </Button>
            ) : (
              <Button
                className={styles.button}
                type="primary"
                htmlType="submit"
                loading={loading}
              >
                Sign Up
              </Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
}
