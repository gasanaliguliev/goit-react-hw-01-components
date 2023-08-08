import PropTypes from "prop-types";

import {
  Section,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from "./Statistics.styled";

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <Title>Upload stats</Title>}
      <StatList>
        {stats.map((stat) => (
          <StatItem
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};




/* export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>
  
    <ul className={css.statlist}>
      <li className={css.statitem}>
        <span className={css.label}>.docx</span>
        <span className={css.percentage}>4%</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>.mp3</span>
        <span className={css.percentage}>14%</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>.pdf</span>
        <span className={css.percentage}>41%</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>.mp4</span>
        <span className={css.percentage}>12%</span>
      </li>
    </ul>
  </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
}; */
