export const CVsList = (props:{cvs:Array<any>}) => {

    return (
        <ul>
        {
            props.cvs.map((cv, i) => {
                return (
                    <li key={i}>{cv.name}</li>
                );
            })
        }
        </ul>
    );
};