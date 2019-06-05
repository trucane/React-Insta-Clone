import React from 'react';
import PostSectionImage from './postSectionImage';
import PostSectionStatus from './postSectionStatus';
import PostSectionHeader from './postSectionHeader';
import './postSection.scss';








const PostSection = (props) => {


    return(
        <>
        <PostSectionHeader data={props.data}/>
        <PostSectionImage data={props.data}/>
        <PostSectionStatus data={props.data.likes}/>
        </>
    )

}


// PostSection.prototypes ={
//     post: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             username: PropTypes.string.isRequired,
//             thumbnailUrl: PropTypes.string.isRequired,
//             likes: PropTypes.number,
//             timestamp: PropTypes.string.isRequired,
//             imageUrl: PropTypes.string.isRequired,
//             comments:PropTypes.arrayOf(
//                 PropTypes.shape({
//                     id: PropTypes.number.isRequired,
//                     text: PropTypes.string.isRequired,
//                     username: PropTypes.string.isRequired,
//                 })
//             ).isRequired

//         })
//     )
// };

export default PostSection;