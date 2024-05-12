import React from "preact/compat"

interface TaskLenghtProps {
    TaskCount: number
}

export const TaskLength: React.FC<TaskLenghtProps> = ({TaskCount}) => {
    return (
        <h1 className={"font-semibold text-3xl pb-[30px]"}>
            Todo list contains overall {TaskCount} task(s)
        </h1>
    )
}