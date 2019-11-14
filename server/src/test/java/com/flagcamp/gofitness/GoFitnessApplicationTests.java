package com.flagcamp.gofitness;

import com.flagcamp.gofitness.model.User;
import com.flagcamp.gofitness.model.UserReservation;
import com.flagcamp.gofitness.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

@SpringBootTest
class GofitnessApplicationTests {

	@Autowired
	private UserRepository userRepository;

	@Test
	public void test() throws Exception {
		// 创建三个User，并验证User总数
		User user = new User("Siyuan", "Zhang", "zsy@123.com", "1111");
		//user.addUserReservations(new UserReservation("1111", new Date(2019, 11,13,12,30).toString(), new Date(2019,11,13,13,30).toString()));
		userRepository.save(user);
		//userRepository.save(new User("Wei", "Wang", "111@111.com", "2222"));
		System.out.println(userRepository.findUserByEmail("zsy@123.com"));
	}

}
