import PropTypes from "prop-types"; 

const PageHeader = ({headerText}) => {
    return(
        <h1>{headerText}</h1>
    )
}

// Definierar egenskapers typer och om de är obligatoriska 
PageHeader.propTypes = {
    headerText: PropTypes.string.isRequired,
}; 

// Definerar standardvärden på egenskaper 
PageHeader.defaultProps = {
    headerText: "Rubrik för sidan",
}; 

export default PageHeader; 