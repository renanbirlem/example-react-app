import React, { Fragment } from 'react';
import ReactPaginate from 'react-paginate';
import { Row, Col } from 'reactstrap';
import Select from 'react-select';

const styles = {
    containerPagination: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft: '32%'
    },
    containerSelect: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'center'
    },
    select: {
        width: '100px',
        marginRight: '10px',
    }
}

const selectSizes = [
    { value: 10, label: 10 },
    { value: 25, label: 25 },
    { value: 50, label: 50 },
    { value: 100, label: 100 },
]

const Pagination = props => {
    return (
        <Fragment>
            <Col md={4} style={styles.containerPagination}>
                <ReactPaginate
                    previousLabel={<i className="now-ui-icons arrows-1_minimal-left"></i>}
                    nextLabel={<i className="now-ui-icons arrows-1_minimal-right"></i>}
                    breakLabel={<a href="">...</a>}
                    breakClassName={"break-me"}
                    pageCount={props.totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={props.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={""}
                    activeClassName={"active"}
                />
            </Col>
            {props.pageSize &&
                <Col md={4} style={styles.containerSelect}>
                    <Select
                        style={styles.select}
                        className="warning"
                        name="pageSize"
                        value={props.pageSize}
                        options={selectSizes}
                        onChange={props.handlePageSize}
                        clearable={false}
                    />
                    registros por página.
                </Col>
            }
        </Fragment>
    )
}


export default Pagination;