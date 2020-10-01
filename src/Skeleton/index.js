import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';

const {width} = Dimensions.get('window');

export default function Skeleton({ visible, children }) {
	const AnimatedValue = new Animated.Value(0);

	useEffect(()=>{
		circleAnimated();

		return () => circleAnimated();
	}, []);


	const circleAnimated = () => {
		AnimatedValue.setValue(0)
		Animated.timing(
			AnimatedValue,
			{
				toValue: 1,
				duration: 350,
				useNativeDriver: false
			}
		).start( () => {
			setTimeout(()=>{
				circleAnimated()
			}, 1000);
		})
	}

	const translateX = AnimatedValue.interpolate({
		inputRange:[0,1],
		outputRange:[-10, 100]
	});

	const translateX2 = AnimatedValue.interpolate({
		inputRange:[0,1],
		outputRange:[-10, 300]
	});

	const translateX3 = AnimatedValue.interpolate({
		inputRange:[0,1],
		outputRange:[-10, 400]
	});

	if(visible){
		return (
			<View style={styles.container}>
					
			 <View style={styles.card}>
	 
				 <View style={{marginRight: 15, width: 100, height: 100, borderRadius: 60, backgroundColor: '#ECEFF1', overflow: 'hidden' }}>
					 <Animated.View 
					 style={{
						 width: '30%',
						 height: '100%',
						 opacity: 0.5,
						 backgroundColor: '#FFF',
						 transform: [ { translateX: translateX } ]
					 }}
					 >	
					 </Animated.View>
				 </View>  
			 
				 <View style={{flex:1, justifyContent: 'space-evenly', overflow: 'hidden'}}>
					 <View style={{backgroundColor: '#ECEFF1', height: 32, borderRadius: 5}}>
						 <Animated.View
						 style={{
							 width: '40%',
							 height: '100%',
							 opacity: 0.5,
							 backgroundColor: '#FFF',
							 transform: [ { translateX: translateX2} ]
						 }}
						 >
						 </Animated.View>
					 </View>
	 
					 <View style={{backgroundColor: '#ECEFF1', height: 22, borderRadius: 5}}>
						 <Animated.View
							 style={{
								 width: '40%',
								 height: '100%',
								 opacity: 0.5,
								 backgroundColor: '#FFF',
								 transform: [ { translateX: translateX2} ]
							 }}
							 >
							 </Animated.View>					
					 </View>
				 </View>
			 
			 </View>  
	 
				<View style={{marginTop:10, backgroundColor: '#ECEFF1', height: 22, borderRadius: 5, overflow: 'hidden'}}>
					<Animated.View
					style={{width: '100%', height: '100%', opacity: 0.5, backgroundColor: '#FFF', transform: [ { translateX: translateX3 } ] }}
					>
					</Animated.View>
				</View>
	 
				<View style={{marginTop:10, backgroundColor: '#ECEFF1', height: 10, borderRadius: 5, width: width / 2, overflow: 'hidden'}}>
				 <Animated.View
					 style={{width: '100%', height: '100%', opacity: 0.5, backgroundColor: '#FFF', transform: [ { translateX: translateX3 } ] }}
					 >
				 </Animated.View>
				</View>
	 
				<View style={{marginTop:10, backgroundColor: '#ECEFF1', height: 8, borderRadius: 5, overflow: 'hidden'}}>
				 <Animated.View
						 style={{width: '100%', height: '100%', opacity: 0.5, backgroundColor: '#FFF', transform: [ { translateX: translateX3 } ] }}
						 >
					 </Animated.View>
				</View>
	 
				<View style={{marginTop:10, backgroundColor: '#ECEFF1', height: 5, borderRadius: 5, width: width / 3, overflow: 'hidden'}}>
				 <Animated.View
						 style={{width: '100%', height: '100%', opacity: 0.5, backgroundColor: '#FFF', transform: [ { translateX: translateX3 } ] }}
						 >
					 </Animated.View>
				</View>
	 
			</View>
		 );
	}

	return(
		<>
			{children}
		</>
	);

}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    card:{
      width: width - 20,
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  });
  