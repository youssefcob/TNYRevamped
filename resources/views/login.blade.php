
<div class="container">
    <h2>Admin Login</h2>
    <form action="{{ route('admin.login') }}" method="POST">
        @csrf
        <div>
            <label>Email:</label>
            <input type="email" name="email" required>
        </div>
        <div>
            <label>Password:</label>
            <input type="password" name="password" required>
        </div>
        <button type="submit">Login</button>
    </form>
    @if ($errors->any())
        <p style="color:red;">{{ $errors->first() }}</p>
    @endif
</div>
