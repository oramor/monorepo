export interface SubjectInfoDTO {
    id: number,
    firstName: string,
    lastName: string | undefined,
    creationDate: Date
}

export interface SubjectListDTO extends Array<SubjectInfoDTO> {}

export interface CreateSubjectDTO {
    firstName: string,
    lastName?: string
}

export interface DeleteSubjectDTO {
    subjectId: number
}