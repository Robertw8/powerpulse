import React from "react"
import { NotFound } from "./DiaryNotFoundItems.styled"

const DiaryNotFoundItems: React.FC<{items:string}>=({items})=>{
return <NotFound>Not found {items}</NotFound>
}
export default DiaryNotFoundItems