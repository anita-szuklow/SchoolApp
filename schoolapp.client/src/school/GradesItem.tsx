import { Grade } from "../types/grades/grades"

type GradesProps = {
    grade: Grade
}
export const GradesItem = (props: GradesProps) => {
    const { grade } = props;
    return(
        <tr>
            {/*<td>{grade.course}</td>*/}
            <td>{ grade.value}</td>
            <td>{ grade.description}</td>
            <td>{ grade.date}</td>
        </tr>
    
    )
}