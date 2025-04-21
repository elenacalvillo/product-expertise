
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { ProductSkill } from '@/utils/quizData';

interface ProductSkillsRadarProps {
  skillScores: Record<ProductSkill, number>;
}

const ProductSkillsRadar: React.FC<ProductSkillsRadarProps> = ({ skillScores }) => {
  const data = Object.entries(skillScores).map(([skill, value]) => ({
    skill,
    value
  }));

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#e2e8f0" />
          <PolarAngleAxis
            dataKey="skill"
            tick={{ fill: '#64748b', fontSize: 12 }}
          />
          <Radar
            name="Skills"
            dataKey="value"
            stroke="#8b5cf6"
            fill="#8b5cf6"
            fillOpacity={0.3}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductSkillsRadar;
