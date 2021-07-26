import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    root: {
        width: '270px',
        height: '100vh',
        background: '#1E162B',

        '&:hover': {
            marginRight: '-200px',
        }
    },
    container: {

        width: '100%',
        boxSizing: 'border-box',
        height: '100%',
        overflowY: 'auto',
        alignContent: 'flex-start',

        '&::-webkit-scrollbar': {
            width: '3px',
        },

        '&::-webkit-scrollbar-thumb': {
            background: '#4DEF00'
        }

    },
    itemContainer: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '5px',
        color: '#CCCCCC',
        cursor: 'pointer',

        '&:hover': {
            background: '#CCCCCC',
            color: '#1E162B'
        }
    },
    item: {
        padding: '10px 15px',
    },

    expandedContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        background: '#311F40',
        color: '#CCCCCC'

    },
    expandedItemContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 15px 5px 40px',
        color: '#CCCCCC',
        cursor: 'pointer',
        transition: '.5s  ease-out',

        '&:hover': {
            background: '#CCCCCC',
            color: '#1E162B',
            width: '90%'

        }
    },

    sidebarIcon: {
        fontSize: '50px'
    }
})

            
export default useStyles
            
            
            