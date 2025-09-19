// Project: words-api
// File: TestSanitizeUtil.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 17 09 2025 20:09:53
// Last Modified: 17 09 2025 20:09:53
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

using words_api.Util;

namespace words_api_tests.Utils;


[TestClass]
public class TestSanitizeUtil
{
    [TestMethod]
    public void Sanitize_ShouldReturnSameString_WhenAlphanumericOnly()
    {
        // Arrange
        string input = "Hello123";

        // Act
        string result = SanitizeUtil.Sanitize(input);

        // Assert
        Assert.AreEqual("Hello123", result);
    }

    [TestMethod]
    public void Sanitize_ShouldRemoveSpecialCharacters()
    {
        // Arrange
        string input = "Hello!@# World$%^";

        // Act
        string result = SanitizeUtil.Sanitize(input);

        // Assert
        Assert.AreEqual("Hello World", result);
    }

    [TestMethod]
    public void Sanitize_ShouldKeepWhitespace()
    {
        // Arrange
        string input = "Hello   World";

        // Act
        string result = SanitizeUtil.Sanitize(input);

        // Assert
        Assert.AreEqual("Hello   World", result);
    }

    [TestMethod]
    public void Sanitize_ShouldHandleMixedCharacters()
    {
        // Arrange
        string input = "Test_123*&^ OK";

        // Act
        string result = SanitizeUtil.Sanitize(input);

        // Assert
        Assert.AreEqual("Test123 OK", result);
    }

    [TestMethod]
    public void Sanitize_ShouldReturnEmptyString_WhenInputIsEmpty()
    {
        // Arrange
        string input = "";

        // Act
        string result = SanitizeUtil.Sanitize(input);

        // Assert
        Assert.AreEqual("", result);
    }

    [TestMethod]
    public void Sanitize_ShouldReturnEmptyString_WhenInputHasOnlySymbols()
    {
        // Arrange
        string input = "!@#$%^&*()";

        // Act
        string result = SanitizeUtil.Sanitize(input);

        // Assert
        Assert.AreEqual("", result);
    }

    [TestMethod]
    [ExpectedException(typeof(NullReferenceException))]
    public void Sanitize_ShouldThrow_WhenInputIsNull()
    {
        // Act
        _ = SanitizeUtil.Sanitize(null);
    }
}
