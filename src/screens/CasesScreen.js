import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import { listCases } from '../actions/casesAction'

const CasesScreen = () => {
    const dispatch = useDispatch()

    const casesList = useSelector(state => state.casesList)
    const {  cases } = casesList

    useEffect(() => {
        dispatch(listCases())
        console.log(cases)
    }, [dispatch])
    return (
        <>
            <h1>Covid Cases in Nigeria</h1>
                <Table striped bordered hover reesponsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>STATE</th>
                            <th>CONFIRMED CASES</th>
                            <th>CASES ON ADMISSION</th>
                            <th>DISCHARGED</th>
                            <th>DEATH(S)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cases && cases.map(cased => (
                            <tr key={cased._id}>
                                <td>{cased.state}</td>
                                <td>{cased.confirmedCases}</td>
                                <td>{cased.casesOnAdmission}</td>
                                <td>{cased.discharged}</td>
                                <td>{cased.death}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
        </>
    )
}

export default CasesScreen
