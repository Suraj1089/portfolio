import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import PropTypes from 'prop-types';

export default function TimeLine({position, company, duration, description}) {
return (
    <Timeline
        sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
            },
        }}
    >
        <TimelineItem>
            <TimelineOppositeContent color="textSecondary">
                { duration}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <div>
                    { company } - <div><i>{ position }</i></div>
                    <ul>
                        {description.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </TimelineContent>
        </TimelineItem>
    </Timeline>
);
}

TimeLine.propTypes = {
    position: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
}