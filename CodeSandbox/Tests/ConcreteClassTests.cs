using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FluentAssertions;
using Moq;
using Moq.Protected;
using NUnit.Framework;

namespace CodeSandbox.Tests {
    [TestFixture]
    class ConcreteClassTests {
        [Test]
        public void TestConcreteClassWithMoq() {
            //Mock<MyConcreteClass> concreteMock = new Mock<MyConcreteClass>();
            //concreteMock.Setup(x => x.SomeOtherMethod()).Returns("Yep It Worked.");

            //concreteMock.Object.SomeOtherMethod()
            //            .Should()
            //            .Be("Yep It Worked.", "Moq is having difficulty mocking this concrete class's methods");

        }

        [Test]
        public void TestInterfaceWithMoq(){
            Mock<IMyInterface> myMock = new Mock<IMyInterface>();
            myMock.Setup(x => x.SomeOtherMethod(It.IsAny<string>())).Returns("Interface MOQd!");
            myMock.Object.SomeOtherMethod("Arg").Should().Be("Interface MOQd!");           
        }

        [Test]
        public void TestMoqInterfaceCalls() 
{
            Mock<IMyInterface> myMock = new Mock<IMyInterface>();
            myMock.Setup(x => x.SomeOtherMethod()).Returns("String");

        }

        [Test]
        public void TestMoqNonInterfaceCalls() {
            Mock<MyConcreteClass> myMock = new Mock<MyConcreteClass>();
            myMock.Setup(x => x.SomeOtherMethod()).Returns("String");

        }

    }
}

