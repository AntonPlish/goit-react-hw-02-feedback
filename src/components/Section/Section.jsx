import PropTypes from 'prop-types';
import styled from '@emotion/styled';


const Section = ({ title, children }) => {
    return (
        <div
            style={{
                fontSize: '18px',
            }}>
            <h2>{title}</h2>
            {children}
        </div>
    )
};


Section.propTypes = {
    title: PropTypes.string,
};

export default Section;