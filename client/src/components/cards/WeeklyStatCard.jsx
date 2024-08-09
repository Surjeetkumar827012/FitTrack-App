import React from "react";
import styled from "styled-components";
import { BarChart } from "@mui/x-charts/BarChart";

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const WeeklyStatCard = ({ data }) => {
  const { weeks = [], caloriesBurned = [] } = data?.totalWeeksCaloriesBurnt || {};

  // Ensure there is some non-zero data in caloriesBurned
  const hasNonZeroData = caloriesBurned.some(value => value > 0);

  return (
    <Card>
      <Title>Weekly Calories Burned</Title>
      {weeks.length > 0 && caloriesBurned.length > 0 && hasNonZeroData ? (
        <BarChart
          xAxis={[{ scaleType: "band", data: weeks }]}
          series={[{ data: caloriesBurned }]}
          height={300}
        />
      ) : (
        <p>No data available</p>
      )}
    </Card>
  );
};
export default WeeklyStatCard;
