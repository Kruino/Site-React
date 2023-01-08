import { Download, LinkOutlined} from '@mui/icons-material';

import '../styles/Project.css'

function Project(props) {
    function Text(props){
        var link = "";
            
        for(var i = 0; i < props.infoArray.length; i++){
            if(i == props.infoArray.length - 1){
                link += props.infoArray[i];
                break;
            }
            link += props.infoArray[i] + " \u003E ";
        };

        return (<a className='link' href={props.link}>{link}</a>)
    }

    function Icon(){
        if(props.type == "Link"){
            return (
                <LinkOutlined style={{color: "gray"}} />
            )
        }
        else if(props.type == "Download"){
            return (
                <Download style={{color: "gray"}} />
            )
        }
    }
    
  return (
    <div className={props.id} style={{backgroundColor: "#121212", width: "100%", borderRadius: 5, padding: 7, display: "flex"}}>
        <Icon />
        <Text infoArray={props.infoArray} place={props.place} />
    </div>
  )
}

export default Project