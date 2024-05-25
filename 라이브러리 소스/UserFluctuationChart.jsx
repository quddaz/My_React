import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';

// X축 날짜 형식 지정 함수
const tickFormatX = (tickItem) => moment(tickItem).format('M/D');
// Y축 값 형식 지정 함수
const tickFormatY = (tickItem) => {
  // 수치가 1,000 이상일 경우에 쉼표가 추가되도록 변경
  return tickItem >= 1000 ? tickItem.toLocaleString() : tickItem;
};

const UserFluctuationChart = ({ data }) => {
  const [disable, setDisable] = useState([]);

  return (
    <StyledWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            left: 30,
            right: -10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="region"
            interval={0}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            interval={0}
            tickLine={false}
            axisLine={false}
            tickFormatter={tickFormatY}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            interval={0}
            tickLine={false}
            axisLine={false}
            tickFormatter={tickFormatY}
          />
          <Tooltip formatter={(value) => value.toLocaleString()} />
          <Legend />
          <Bar yAxisId="left" dataKey="population"  name="장애인 인구 수" barSize={20} fill="#8884d8" />
        </ComposedChart>
      </ResponsiveContainer>
    </StyledWrapper>
  );
};

export default UserFluctuationChart;

const StyledWrapper = styled.div`
  height: 400px;
  width: 1000px;
  margin: 0 auto; // 가운데 정렬을 위해 margin을 auto로 설정합니다.
`;
