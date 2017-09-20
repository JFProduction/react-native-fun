import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import Comment from '../presentations/Comment'

class Post extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.post.title}`,
    })

    _renderComment(item) {
        return (
            <Comment comment={ item } />
        )
    }

    createComment() {
        alert('test comment...')
    }

    render() {
        let { params, nav } = this.props.navigation.state

        return (
            <View style={ styles.container }>
                <View style={ styles.post }>
                    <Text style={ styles.content }>{ params.post.text }</Text>
                    <TouchableOpacity
                        onPress={ () => nav('Profile', { user: params.post._creator }) }>
                        <Text style={ styles.author }>{ params.post._creator.username }</Text>
                    </TouchableOpacity>
                </View>
                <View style={ styles.comments }>
                    { params.post._comments.length > 0 
                        ? <FlatList 
                            data={ params.post._comments } 
                            keyExtractor={ comment => comment._id }
                            renderItem={ ({item}) => this._renderComment(item) } /> 
                        : <View style={ styles.noComments }>
                            <Text>No Comments Yet...</Text>
                        </View>
                    }
                </View>
                <TouchableOpacity style={ styles.addCmt }
                    onPress={ () => this.createComment() }>
                    <Text style={{ color: '#fff' }}>Add Comment</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 100+'%',
        height: 100+'%',
        padding: 10
    },
    post: {
        width: 100+'%',
        backgroundColor: '#fafafa',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#d6d7da',
    },
    content: {
        fontSize: 15
    },
    author: {
        marginTop: 10,
        fontSize: 12
    },
    comments: {
        width: 100+'%',
        height: 75+'%',
    },
    noComments: {
        alignItems: 'center',
        paddingTop: 50
    },
    addCmt: {
        backgroundColor: '#333',
        height: 10+'%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Post