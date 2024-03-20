export const getProjects = () => {
    return fetch(`http://localhost:8088/projects`)
    .then(res => res.json())
}