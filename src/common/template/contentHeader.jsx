import React from 'react'
import Grid from '../layout/grid'
import IconButton from '../template/iconButton'

export default props => (

    <section  className='content-header'  >
        <h1> {props.title} </h1>
        {/* <div className='filter' role='form' >

            <Grid cols='2 4 6' >
                <input
                    id='description'
                    className='form-control'
                    placeholder='Pesquisar...'
                // onChange={this.props.changeDescription}
                // value={this.props.description}
                // onKeyUp={this.keyHandler} // Metodo de tecla de atalho
                ></input>
            </Grid>

            <Grid cols='1' >

                <IconButton
                    style='info'
                    icon='search'
                // onClick={search}
                />

            </Grid >

        </div> */}


    </section>

)