import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Work } from "@mui/icons-material";

function Experience() {
  return (
    <div>
      <VerticalTimeline lineColor="#21325e" className="experience">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          iconStyle={{ background: "#21325e", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            McGill University, Montreal, QC
          </h3>
          <p>
            Bachelor of Science in Computer Science, Minor in Mathematics
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - 2025"
          iconStyle={{ background: "#21325e", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            McGill University, Montreal, QC
          </h3>
          <p>
            Professor of Sciences
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2025 - 2027"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            McGill University, Montreal, QC
          </h3>
          <p>
            IT Consultant
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2027 - 2031"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            McGill University, Montreal, QC
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Varsity Soccer Team
          </h4>
          <p>
            Soccer Player
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
