"use client";

import React, { useState } from "react";
import StatusUpdate from "@/components/StatusUpdate";

const TestStatusPage: React.FC = () => {
    return (
      <div>
        <h1>Test Status Update Component</h1>
        <StatusUpdate />
        <p>Dies ist ein Testinhalt.</p>
      </div>
    );
  };

export default TestStatusPage;
